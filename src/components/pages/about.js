import React from "react";
import profilePicture from "../../../static/assests/images/bio/devtrunk.jpg"

export default function() {
    return (
    <div className="content-page-wrapper">
        <div
         className="left-column"
         style={{
             background: "url(" + profilePicture + ") no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "center"
         }} />
        <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis molestie rutrum. Nullam diam diam, euismod et venenatis id, fermentum sit amet neque. Nunc tincidunt nibh in sem lobortis, in euismod est tempor. Mauris a ex nec velit blandit aliquam. Donec porta nibh sed sem viverra fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet dictum leo. Duis ac enim posuere, tempor lorem eget, semper enim. Vestibulum sed mi magna. Vivamus eu diam vitae magna aliquam posuere ut vitae augue. In hac habitasse platea dictumst.
        </div>
    </div>
    )
}