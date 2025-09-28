from langchain_core.tools import tool

@tool
def request_human_review(message: str) -> str:
    """Request human review of a message."""
    # In a real-world scenario, this would trigger a human review process.
    # For this example, we'll just simulate the process and return a hardcoded response.
    print(f"Human review requested for message: {message}")
    return "Human review requested. The message will be analyzed by a human agent."
