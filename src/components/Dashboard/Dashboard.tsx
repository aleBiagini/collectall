import MultipleSelectPlaceholder from "../MultipleSelectPlaceholder/MultipleSelectPlaceholder";
import StandardImageList from "../StandardImageList/StandardImageList";

function Dashboard() {
    
    return (
        <>
            <MultipleSelectPlaceholder></MultipleSelectPlaceholder>
            <StandardImageList selectedValue={selectedValue}></StandardImageList>
        </>
    );
}

export default Dashboard;