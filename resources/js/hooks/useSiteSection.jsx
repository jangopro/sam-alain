import React, {useContext} from "react";
import {SiteContext} from "../contexts/siteSectionContext";

export default function useSiteSection () {
    const {sectionChosen, setSectionChosen} = useContext(SiteContext)
    const isBusinessSide = sectionChosen === 'business'
    const isNormalSide = sectionChosen === 'normal'

    return {isBusinessSide, isNormalSide, setSectionChosen}
}
