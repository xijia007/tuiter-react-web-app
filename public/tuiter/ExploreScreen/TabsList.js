const TabsList = () => {
    return (`
            <div id="for-you" class="mt-2">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-inline">
                  <a class="nav-link" href="entertainment.html"
                    >Entertainment</a
                  >
                </li>
              </ul>
            </div>
            
    `)
}
export default TabsList;