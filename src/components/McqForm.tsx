import { FieldArray, Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
type Question = {
    question: string,
    options: string[],
    answer: string
}
const initialValues = {
    questions: [{
        question: "",
        options: [""],
        answer: ""
    }]
}

const validateSchema =  Yup.object().shape({
    questions: Yup.array().of(
        Yup.object().shape({
            question: Yup.string().required("Question is Required"),
            options: Yup.array().of(Yup.string().required("Option value required!")).required("Atleast one option required!"),
            answer: Yup.string().required("Select an answer!")
        })
    )
})

function McqForm() {
  return (
    <Formik initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={(values) => console.log(values)}>
    <Form>
        <FieldArray name="questions" >
        {(arrProps) => {
            const {push, remove, form} = arrProps
            const {values} = form
            const {questions} = values

            // console.log(questions)
            return (
            <div>
                {questions.map((question:Question, index:number) => (
                <div key={index}>
                    
                    <button type="button" onClick={() => remove(index)}>Remove X</button>
                    <Field name={`questions.${index}.question`} />
                    <ErrorMessage name={`questions.${index}.question`} component="div"/>
                        <FieldArray name={`questions.${index}.options`}>
                        {(optionProps) => {
                            const {push:addOption, remove:removeOption, form} = optionProps
                            const {values} = form
                            const options = values.questions[index].options;
                            return (
                            <div>
                                {options.map((option:string, oindex:number) => (
                                <div key={oindex}>
                                    <Field type="radio" name={`questions.${index}.answer`} value={option}/>

                                    <Field name={`questions.${index}.options.${oindex}`} />
                                    <ErrorMessage name={`questions.${index}.options.${oindex}`} component="div"/>
                                    <button className="add-option" type="button" onClick={() => removeOption(oindex)}>Option X</button>
                                </div>
                                ))}
                                <button className="delete-option" type="button" onClick={() => addOption("")}>Add Option</button>
                                <ErrorMessage name={`questions.${index}.answer`} component="div"/>
                            </div>
                            )
                        }}
                        </FieldArray>
                </div>
                ))}
                <button type="button" className="add-question" onClick={() => push({question: "",options:[""], answer: ""})}>Add Question</button>
            </div>
            )
        }
        }
        </FieldArray>
        <button type="submit">Submit</button>
    </Form>
    </Formik>
    )
}

export default McqForm