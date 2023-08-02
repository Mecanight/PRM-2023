import TopicCardAction from "../TopicCardActions"
import TopicCardBody from "../TopicCardBody"
import TopicCardHeader from "../TopicCardHeader"
function TopicCard(){
    return(
        <div id="topic-card">
            <TopicCardHeader/>
            <TopicCardBody/>
            <TopicCardAction/>
        </div>
    )
}

export default TopicCard