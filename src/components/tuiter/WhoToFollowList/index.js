import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
        <ul>
            <h5>Who to follow</h5>
            {
                who.map(who => {
                    return (
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}
export default WhoToFollowList;

