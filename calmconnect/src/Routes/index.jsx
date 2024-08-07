import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import ThreadLayout from "../Layouts/ThreadLayout";
import ProfileLayout from "../Layouts/ProfileLayout";
import CreateThreadLayout from "../Layouts/CreateThreadLayout";
import NotificationLayout from "../Layouts/NotificationLayout";
import SingleThreadLayout from "../Layouts/SingleThreadLayout";
import ChatHomeLayout from "../Layouts/ChatHomeLayout";
import Replies from "../Components/Replies";
import ChatHome from "../Pages/ChatHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/threads",
    element: <ThreadLayout />,
  },
  {
    path: "/chat-home/:receiverId",
    element: <ChatHome/>
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
  },
  {
    path: "/create-thread",
    element: <CreateThreadLayout />,
  },
  {
    path: "/notifications",
    element: <NotificationLayout />,
  },
  {
    path: "/thread-details",
    element: <SingleThreadLayout />,
  },
  {
    path: "/replies",
    element: <Replies />,
  },
]);
