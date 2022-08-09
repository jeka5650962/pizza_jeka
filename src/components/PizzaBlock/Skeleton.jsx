import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="content__column pizza"
        speed={2}
        width={280}
        height={454}
        viewBox="0 0 280 454"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="120" r="120"/>
        <rect x="0" y="270" rx="10" ry="10" width="280" height="20"/>
        <rect x="0" y="315" rx="10" ry="10" width="280" height="85"/>
        <rect x="0" y="419" rx="10" ry="10" width="90" height="30"/>
        <rect x="120" y="415" rx="20" ry="20" width="160" height="40"/>
    </ContentLoader>
)

export default Skeleton
