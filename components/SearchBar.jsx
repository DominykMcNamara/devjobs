import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
export default function SearchBar() {
    return (
        <div>
            <Formik initialValues={{
                companyOrSearchTerm: "",
                location: "",
                fullTime: false

            }} />
        </div>
    )
}