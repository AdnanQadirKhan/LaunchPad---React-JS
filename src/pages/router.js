import Login from './Admin/Login';
import Admin from './Admin/Admin';
import ExploreAll from './Admin/ExploreAll';
import AdminViewLock from './Admin/AdminViewLock';
import EditLock from './Admin/EditLock';
import UpdateLock from './Admin/UpdateLock';
import AdminViewPresale from './Admin/ViewPresale';
import EditPresale from './Admin/EditPresale';
import ViewKYC from './Admin/ViewKYC';
import ViewAudit from './Admin/ViewAudit';

import Home01 from "./Home01";
import Home02 from "./Home02";
import Explore01 from './Explore01';
import ExploreInvestment from './ExploreInvestment';
import ExploreMyInvestment from './ExploreMyInvestment';
import Explore02 from './Explore02';
import ViewLock from './ViewLock';
import Creator from './Creator';
import Item from './Item';
import ItemDetails from './ItemDetails';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import Authors from './Authors';
import ConnectWallet from './ConnectWallet';
import CreatePresale from './CreatePresale';
import Register from './Register';
import Contact from './Contact';
import CreateAirdrop from './CreateAirdrop';
import CreateLock from './CreateLock';
import RequestAudit from './RequestAudit';
import RequestKYC from './RequestKYC';
import ReportPresale from './ReportPresale';
import ViewPresale from './ViewPresale';
import React from "react";
import ViewAlert from "./ViewAlert";
import Leaderboard from "./Leaderboard";
import AdminRoutes from './AdminRoutes';

const routes = [
    { path: '/', component: <Home01 /> },
    { path: '/home-02', component: <Home02 /> },
    { path: '/explore-01', component: <Explore01 /> },
    { path: '/explore-investments', component: <ExploreInvestment /> },
    { path: '/my/presales', component: <ExploreMyInvestment /> },
    { path: '/explore-02', component: <Explore02 /> },
    { path: '/view-locks/presale', component: <ViewLock /> },
    { path: '/view-locks/custom', component: <ViewLock /> },
    // { path: '/view-locks', component: <ViewLock /> },
    { path: '/creator', component: <Creator /> },
    { path: '/item', component: <Item /> },
    { path: '/item-details', component: <ItemDetails /> },
    { path: '/blog', component: <Blog /> },
    { path: '/blog-details', component: <BlogDetails /> },
    { path: '/authors', component: <Authors /> },
    { path: '/connect-wallet', component: <ConnectWallet /> },
    { path: '/create-presale', component: <CreatePresale /> },
    { path: '/register', component: <Register /> },
    { path: '/contact', component: <Contact /> },
    { path: '/create-airdrop', component: <CreateAirdrop /> },
    { path: '/create-lock', component: <CreateLock /> },
    { path: '/report-presale', component: <ReportPresale /> },
    { path: '/request-audit', component: <RequestAudit /> },
    { path: '/request-kyc', component: <RequestKYC /> },
    { path: '/presale/:id', component: <ViewPresale /> },
    { path: '/alerts/', component: <ViewAlert /> },
    { path: '/leaderboard/', component: <Leaderboard /> },
    
    // ---------------     Admin Routes       ----------------------------
    
    { path: '/login', component: <Login /> },
    { path: '/admin/', component: <AdminRoutes><Admin /></AdminRoutes> },
    { path: '/admin/explore-all', component: <AdminRoutes><ExploreAll /></AdminRoutes> },
    { path: '/admin/view/presale/:id', component: <AdminRoutes><AdminViewPresale /></AdminRoutes> },
    { path: '/presale/:id', component: <AdminRoutes><ViewPresale /></AdminRoutes> },
    { path: '/admin/edit-presale', component: <AdminRoutes><ExploreAll /></AdminRoutes> },
    { path: '/admin/edit-presale/:id', component: <AdminRoutes><EditPresale /></AdminRoutes> },
    { path: '/admin/view-locks/presale', component: <AdminRoutes><AdminViewLock /></AdminRoutes> },
    { path: '/admin/view-locks/custom', component: <AdminRoutes><AdminViewLock /></AdminRoutes> },
    { path: '/admin/edit-lock', component: <AdminRoutes><EditLock /></AdminRoutes> },
    { path: '/admin/edit/lock/:id', component: <AdminRoutes><UpdateLock /></AdminRoutes> },
    { path: '/admin/view-kyc', component: <AdminRoutes><ViewKYC /></AdminRoutes> },
    { path: '/admin/view-audit', component: <AdminRoutes><ViewAudit /></AdminRoutes> },




]

export default routes;