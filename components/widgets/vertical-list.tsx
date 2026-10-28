import { JSX, Key } from "react";

export interface VerticalListItem {
    element: JSX.Element;
    key: Key;
}

export default function VerticalList({
    listItems,
}: {
    listItems: VerticalListItem[];
}) {
    return (
        <ul className="list-none">
            {listItems.map((currentItem) => {
                return (
                    <li className="pb-6 last:pb-0" key={currentItem.key}>
                        {currentItem.element}
                    </li>
                );
            })}
        </ul>
    );
}
