
import BaseLayout from "./base"

export default function PageLayout({ children }) {
    return (
        <BaseLayout>
            <div className="global-container">
                <div>{children}</div>
            </div>
        </BaseLayout>
    )
}