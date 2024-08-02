import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/LandingPages/Main/Main";
import Home from "../pages/LandingPages/Home/Home/Home";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import AppLayout from "../pages/App/AppLayout/AppLayout";
import Dashboard from "../pages/App/AppPages/Dashboard/Dashboard";
import Staking from "../pages/App/AppPages/Staking/Staking";
import MarketStatistics from "../pages/App/AppPages/MarketStatistics/MarketStatistics";
import HowTo from "../pages/App/AppPages/HowTo/HowTo";
import TokenStatistics from "../pages/App/AppPages/TokenStatistics/TokenStatistics";
import FindTraders from "../pages/App/AppPages/FindTraders/FindTraders";
import FreeCoins from "../pages/App/AppPages/FreeCoins/FreeCoins";
import StakingDetails from "../pages/App/AppPages/Staking/StakingDetails";
import UserProfile from "../pages/App/AppPages/UserProfile/UserProfile";
import Blogs from "../pages/LandingPages/Blogs/Blogs";
import BlogDetails from "../pages/LandingPages/Blogs/BlogDetails";
import UserProfilePr from "../private/UserProfilePr";
import NewUniswapTokens from "../pages/App/AppPages/NewUniwsapTokens/NewUniswapTokens";
import CoinDetails from "../pages/App/AppPages/MarketStatistics/CoinDetails";
import AboutUs from "../pages/LandingPages/Company/AboutUs/AboutUs";
import OurTeam from "../pages/LandingPages/Company/OurTeam/OurTeam";
import Careers from "../pages/LandingPages/Company/Careers/Careers";
import JobDetails from "../pages/LandingPages/Company/Careers/JobDetails";
import Support from "../pages/LandingPages/Company/Support/Support";
import Publications from "../pages/LandingPages/Company/Publications/Publications";
import Ethical from "../pages/LandingPages/Ethical/Ethical";
import Wallet from "../pages/App/AppPages/Wallet/Wallet";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/consideration",
        element: <Ethical />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: 'blogs/:id',
        element: <BlogDetails />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/our-team',
        element: <OurTeam />
      },
      {
        path: '/support',
        element: <Support />
      },
      {
        path: '/publications',
        element: <Publications />
      },
      {
        path: '/careers',
        element: <Careers />,
        children: [
          {
            path: '/careers/:id',
            element: <JobDetails />
          }
        ]
      }
    ]
  },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        path: "leaderboard",
        element: <Dashboard />
      },
      {
        path: "find-traders",
        element: <FindTraders />
      },
      {
        path: "staking",
        element: <Staking />,
      },
      {
        path: "staking/:id",
        element: <StakingDetails />,
        loader: () => fetch('/staking.json')
      },
      {
        path: "free-coins",
        element: <FreeCoins />
      },
      {
        path: "market-statistics",
        element: <MarketStatistics />
      },
      {
        path: "market-statistics/:id",
        element: <CoinDetails />
      },
      {
        path: "token-statistics",
        element: <TokenStatistics />
      },
      {
        path: "new-tokens",
        element: <NewUniswapTokens />
      },
      {
        path: "0x0-wallet",
        element: <Wallet />
      },
      {
        path: "how-to",
        element: <HowTo />
      },
      {
        path: "user-profile",
        element: <UserProfilePr><UserProfile /></UserProfilePr>
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
])
export default router;