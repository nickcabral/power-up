import * as ReactDOM from "react-dom";
import * as React from "react";
import { BoardBar } from "@comps/BoardBar";
import { Client } from "@comps/Client";
import { Modal } from "@comps/Modal";
import { Section } from "@comps/Section";
import { Settings } from "@comps/Settings";
import { Authorize } from "@comps/Authorize";
import { AuthSuccess } from "@comps/AuthSuccess";

const routes = {
    "authorize": Authorize,
    "auth-success": AuthSuccess,
    "board-bar": BoardBar,
    "client": Client,
    "modal": Modal,
    "section": Section,
    "settings": Settings
};
const Route = routes[document.currentScript.getAttribute('path')];
ReactDOM.render(
    <Route />,
    document.getElementById('root')
  );