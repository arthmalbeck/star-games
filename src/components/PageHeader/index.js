import React, { useState } from "react";

import {
    Row,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import Icon from '@mdi/react';
import { mdiHelpCircleOutline } from '@mdi/js';
import './styles.css';
import { Link } from "react-router-dom";

const PageHeader = ({ title, description, route }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    return (
        <div className="page-header">
            <Row>
                <h1>
                    {title}
                    <span id="titlePageTooltip">
                        <Icon path={mdiHelpCircleOutline} size={1} color="white" />
                    </span>
                    <Tooltip placement="bottom" isOpen={tooltipOpen} target="titlePageTooltip" toggle={() => setTooltipOpen(!tooltipOpen)}>
                        {description}
                    </Tooltip>
                </h1>
                
            </Row>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">
                            Star Games
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{title}</BreadcrumbItem>
                </Breadcrumb>
            </Row>
        </div>
    );
};

export default PageHeader;