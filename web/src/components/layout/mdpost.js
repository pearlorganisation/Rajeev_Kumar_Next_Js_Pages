
import mkLink from "@/util/mklink"

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MDPost({contentProps, backLink, backText}) {
    return (
        <>
            <a href={mkLink(backLink)}><i className="fa fa-angle-left"></i> {backText}</a>
            <h1 className="font-GraphikBold text-3xl mt-6">{contentProps.title}</h1>
            <p className="text-sm italic my-2">Last Updated On: {contentProps.updated_at}</p>
            <div className="space-y-1 font-Graphik markdown mb-4">
                <Markdown remarkPlugins={[remarkGfm]} components={{
                    ...(contentProps.imgwidth? {
                        img(imgprops) {
                            const {node, ...rest} = imgprops
                            return <img {...rest} width="500"/>
                        }
                    }: {})
                }}>{contentProps.contentHtml}</Markdown>
            </div>
        </>
    )
}