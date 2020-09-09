import React from 'react';
import '../app.scss';
import { List, ListItem } from 'chayns-components/lib';

const ListDonors = () => (
    <div className="list">
        <div className="thanks"><strong>Danke für Deine Spende!</strong></div>
        <List>
            <ListItem
                className="listItem"
                title="Luzie Bauch"
                image="https://sub60.tobit.com/u/2165503?size=200&nocache=true"
                circle
            />
            <ListItem
                className="listItem"
                title="Noah Dahlhaus"
                image="https://sub60.tobit.com/u/2210833?size=90"
                circle
            />
            <ListItem
                className="listItem"
                title="Anonym"
                image="https://sub60.tobit.com/Content/unknown_user.png"
                circle
            />
            <ListItem
                className="listItem"
                title="Jana Walfort"
                image="https://sub60.tobit.com/u/2392858?size=90"
                circle
            />
            <ListItem
                className="listItem"
                title="Anonym"
                image="https://sub60.tobit.com/Content/unknown_user.png"
                circle
            />
        </List>
    </div>
);
export default ListDonors;
