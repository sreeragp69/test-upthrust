const AppHeaderData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About us",
    path: "/about-us",
  },
  {
    id: 3,
    name: "Courses",
    path: "/courses",
    isDropdown: true,
    dropdownList:[
      {
        courseImg:"https://developer.microsoft.com/content/microsoftgamedev/en-us/games/resources/industry-careers/_jcr_content/root/container/container/container/tabs/item_1/image.coreimg.jpeg/1696605395168/halo.jpeg",
        courseName:"Game Development",
        description:"Learn to design and build immersive video games with modern tools and engines."
      },
      {
        courseImg:"https://buildfire.com/wp-content/uploads/2024/09/Whats-the-Difference-Between-UX-Design-vs.-UI-Design_@3x-1-scaled-3.jpg",
        courseName:"UI UX Design",
        description:"Master the art of creating user-friendly interfaces and seamless digital experiences."
      },
      {
        courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7VHI_0GsdfBbN52QWP46himMrsAViwvhHOLh8QeT1Q6f2NvQzHuO0oV5B_0TzQRMRtE&usqp=CAU",
        courseName:"Graphics Design",
        description:"Develop creative visuals, logos, and designs using industry-standard tools."
      },
      {
        courseImg:"https://mytasker.com/assets/images/WD-D-banner.jpg",
        courseName:"Web Development",
        description:"Learn to build modern, responsive websites and web applications from scratch."
      },
      {
        courseImg:"https://mytasker.com/assets/images/WD-D-banner.jpg",
        courseName:"Graphics Design",
        description:"Explore advanced design concepts for branding, marketing, and digital content."
      },
    ]
    
  },
  {
    id: 4,
    name: "Batches",
    path: "/batches",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 6,
    name: "Contact us",
    path: "/contact-us",
  },
];

export default AppHeaderData;
