var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/hieu-lee/portfolio.git", // Update to point to your repository
    user: {
      name: "Hieu Lee", // update to use your name
      email: "hiuld1009@gmail.com", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
