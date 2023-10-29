import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "pages";
import {Profile} from "widgets/ui";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        children: [
            {
                index: true,
                element: <div>Выберите сотрудника, чтобы посмотреть его профиль</div>
            },
            {
                path: ":id",
                element: <Profile/>,
            }
        ]
    }
])