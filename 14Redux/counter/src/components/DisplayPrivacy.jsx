import { useSelector } from "react-redux"

export default function DisplayPrivacy() {

    const privacy = useSelector( (store) => store.privacy)

    return (
        <div>
            <p className="">
                Counter Value is Private
            </p>
        </div>
    )
}
