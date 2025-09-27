
from langgraph.graph import StateGraph, END, START
from app.state import AgentState
from app.openai_client import check_fraud_llm
from app.tools import request_human_review


async def check_fraud_node(state: AgentState):
    result = await check_fraud_llm(state["message"])
    return {"fraud_result": result}


async def human_review_node(state: AgentState):
    result = request_human_review.invoke({"message": state["message"]})
    return {"human_review_result": result}


def should_escalate(state: AgentState):
    if state["fraud_result"]["confidence"] < 0.9:
        return "human_review"
    else:
        return END


def create_graph():
    workflow = StateGraph(AgentState)
    workflow.add_node("check_fraud", check_fraud_node)
    workflow.add_node("human_review", human_review_node)

    workflow.add_edge(START, "check_fraud")
    workflow.add_conditional_edges(
        "check_fraud", should_escalate, {"human_review": "human_review", END: END}
    )
    workflow.add_edge("human_review", END)
    return workflow.compile()


graph = create_graph()
