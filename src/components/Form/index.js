import React from 'react';
import { useForm } from 'react-hook-form';
import API from '../../api'
import { StyledForm, Input, Textarea, Buttom } from './index.styled';

const Form = (props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    props.dataForm(true)

    API.post('', data)
    
    reset({
      title: "",
      content: "",
      due: ""
    })
    
    props.dataForm(false)
  }

  if (errors && errors.length) {
    console.log(errors);
  }
  
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} >
      <Input type="text"
        placeholder="Title"
        autoComplete="off"
        {...register("title", {required: true, maxLength: 80})} />
      <Textarea
        type="textarea" 
        placeholder="Content"
        {...register("content", {required: true})} />
      <Input 
        type="datetime-local" 
        placeholder="Due Date"
        {...register("due", {required: true})} />
      <Buttom type="submit"/>
    </StyledForm>
  );
}

export default Form