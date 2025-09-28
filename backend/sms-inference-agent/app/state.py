from typing import TypedDict, Optional
from typing_extensions import Annotated

class AgentState(TypedDict, total=False):
    message: str
    fraud_result: dict
    human_review_result: Annotated[str, "The result of the human review"]
