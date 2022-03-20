import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who";

const WhoToFollowList = () => {
    return (
        <ul>
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

