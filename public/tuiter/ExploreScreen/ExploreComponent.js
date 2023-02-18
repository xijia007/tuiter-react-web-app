import PostSummaryList from "../PostSummaryList/index.js";
import SearchField from "./SearchField.js";
import TabsList from "./TabsList.js";
import ImageWithOverlaid from "./ImageWithOverlaid.js";
const ExploreComponent = () => {
    return(`
            <div class="row">
                <!-- search field and cog -->
                ${SearchField()}    
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      ${TabsList()} 
           </ul>
           <!-- image with overlaid text -->
           ${ImageWithOverlaid()} 
           <div>
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
