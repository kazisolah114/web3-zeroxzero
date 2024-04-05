import { createBrowserRouter } from "react-router-dom";
import Main from "../components/LandingPages/Main/Main";
import Home from "../components/LandingPages/Home/Home/Home";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import AppLayout from "../components/App/AppLayout/AppLayout";
import Dashboard from "../components/App/AppPages/Dashboard/Dashboard";
import Staking from "../components/App/AppPages/Staking/Staking";
import MarketStatistics from "../components/App/AppPages/MarketStatistics/MarketStatistics";
import HowTo from "../components/App/AppPages/HowTo/HowTo";
import TokenStatistics from "../components/App/AppPages/TokenStatistics/TokenStatistics";
import FindTraders from "../components/App/AppPages/FindTraders/FindTraders";
import FreeCoins from "../components/App/AppPages/FreeCoins/FreeCoins";
import StakingDetails from "../components/App/AppPages/Staking/StakingDetails";
import UserProfile from "../components/App/AppPages/UserProfile/UserProfile";
import Blogs from "../components/LandingPages/Blogs/Blogs";
import BlogDetails from "../components/LandingPages/Blogs/BlogDetails";


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
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: 'blogs/:id',
        element: <BlogDetails />
      }
    ]
  },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
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
        path: "token-statistics",
        element: <TokenStatistics />
      },
      {
        path: "how-to",
        element: <HowTo />
      },
      {
        path: "user-profile",
        element: <UserProfile />
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
])
export default router;