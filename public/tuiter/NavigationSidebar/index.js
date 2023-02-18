const NavigationSidebar = (active) => {
  return `
   <div class="list-group">
    <a class="list-group-item" href="#">
      <i class="fab fa-twitter"></i>
    </a> 
    <a class="list-group-item ${
      active === "home" ? "active" : " "
    }" href="../HomeScreen/index.html">
      <i class="fa fa-home"></i>
      <span class="ms-2 d-none d-sm-none d-md-none d-lg-none d-xl-inline">Home</span>
    </a> 
    <a class="list-group-item ${
      active === "explore" ? "active" : " "
    }" href=" ../explore/index.html">
      <span>#</span>
      <span class="ms-3 d-none d-sm-none d-md-none d-lg-none d-xl-inline">Explore</span>
    </a> 
    <a class="list-group-item ${
      active === "notifications" ? "active" : " "
    }" href="#">
      <i class="far fa-bell"></i>
      <span class="ms-2 d-none d-sm-none d-md-none d-lg-none d-xl-inline">Notifications</span>
    </a> 
    <a class="list-group-item ${
      active === "messages" ? "active" : " "
    }" href="#">
      <i class="far fa-envelope"></i>
      <span class="ms-2 d-none d-sm-none d-md-none d-lg-none d-xl-inline">Messages</span>
    </a> 
    <a class="list-group-item ${
      active === "bookmarks" ? "active" : " "
    }" href="#">
      <i class="far fa-bookmark"></i>
      <span class="ms-2 d-none d-sm-none d-md-none d-lg-none d-xl-inline">Bookmarks</span>
    </a> 
    <a class="list-group-item ${active === "lists" ? "active" : " "}" href="#">
      <i class="fas fa-list-ul"></i>
      <span class="ms-2 d-none d-sm-none d-md-none d-lg-none d-xl-inline">Lists</span>
    </a> 
    <a class="list-group-item ${
      active === "profile" ? "active" : " "
    }" href="#">
      <i class="far fa-user"></i>
      <span class="ms-2 d-none d-sm-none d-md-none d-lg-none d-xl-inline">Profile</span>
    </a> 
    <a class="list-group-item ${active === "more" ? "active" : " "}" href="#">
      <i class="bi bi-three-dots"></i>
      <span class="ms-2 d-none d-sm-none d-md-none d-lg-none d-xl-inline">More</span>
    </a> 
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `;
};
export default NavigationSidebar;
