const SearchField = () => {
    return (`
         
                <span class="wd-search-icon"><i class="bi bi-search"></i></span>
                <div class="col-11">
                    <form
                      class="form-inline"
                      style="
                        position: relative;
                        box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
                      "
                    >
                        <input
                        style="height: 60px"
                        class="form-control h-auto mr-sm-2 input-sm rounded-pill"
                        type="search"
                        placeholder="Search Twitter"
                        aria-label="Search"
                      />
                    </form>
                </div>
                <div id="blue-gear-button" class="col-1 float-right">
                    <button
                      type="button"
                      class="btn btn-link"
                      onclick="window.location.href='explore-settings.html';"
                    >
                      <span class="bi bi-gear"></span>
                    </button>
                </div>
            
    `)
}
export default SearchField;