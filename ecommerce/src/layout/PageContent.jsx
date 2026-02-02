import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { HomePage } from "../pages/HomePage";

export default function PageContent(){
    return(
        <main className="flex-1">
            <Switch>
                
                <Route path="/">
                    <HomePage/>
                </Route>

            </Switch>


        </main>


    )
}