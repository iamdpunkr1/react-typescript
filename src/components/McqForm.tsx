import { FieldArray, Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
// import TextError from './TextError'
import { mcqState } from '../recoilState'
import {useRecoilState} from 'recoil'

type Question = {
    question: string,
    options: string[],
    answer: string
}
// const initialValues = {
//     questions: [{
//         question: "",
//         options: [""],
//         answer: ""
//     }]
// }

const validateSchema =  Yup.object().shape({
    questions: Yup.array().of(
        Yup.object().shape({
            question: Yup.string().required("Question is Required"),
            options: Yup.array().of(Yup.string().required("Option's value required!")).required("Atleast one option required!"),
            answer: Yup.string().required("Select an answer!")
        })
    )
})

function McqForm() {
    const [mcqStates, setMcqState] = useRecoilState(mcqState)
  return (
    <div className="box">
    <h2>MCQ Form</h2>
    <Formik initialValues={mcqStates}
            validationSchema={validateSchema}
            onSubmit={(values) => {
                setMcqState(values)
                console.log(values)
                }}>
    
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
                <div key={index} style={{margin:"20px 0"}}>
                    
                    {/* Question Name */}
                    <Field name={`questions.${index}.question`}
                           placeholder={`Question ${index+1}`} />
                    <button type="button" className="delete-button" onClick={() => remove(index)}>Delete</button>
                    <ErrorMessage name={`questions.${index}.question`} >
                     {
                            (errorMsg) => <div className="error">{errorMsg}</div>
                     }
                     </ErrorMessage>   

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

                                    <Field name={`questions.${index}.options.${oindex}`}
                                           placeholder={`Option ${oindex+1}`} />
                                    <button className="delete-option" type="button" onClick={() => removeOption(oindex)}>x</button>
                                    <ErrorMessage name={`questions.${index}.options.${oindex}`} >
                                    {
                                            (errorMsg) => <div className="error">{errorMsg}</div>
                                    }
                                    </ErrorMessage> 
                                </div>
                                ))}
                                <button className="add-option" type="button" disabled={questions[index].options.length===4 ? true : false } onClick={() => addOption("")}>Add Option</button>
                                <ErrorMessage name={`questions.${index}.answer`} component="div">
                                {
                                        (errorMsg) => <div className="error">{errorMsg}</div>
                                }
                                </ErrorMessage> 
                            </div>
                            )
                        }}
                        </FieldArray>
                </div>
                ))}
                <button type="button" className="add-question" onClick={() => push({question: "",options:[""], answer: ""})}>Add Question</button>
                <button type="submit">Submit</button>
            </div>
            )
        }
        }
        </FieldArray>
        
    </Form>
    </Formik>
    </div>
    )
}

export default McqForm