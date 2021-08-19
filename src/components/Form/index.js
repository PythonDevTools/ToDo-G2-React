import React from 'react';
import { useForm } from 'react-hook-form';
import API from '../../api'
import { StyledForm, Input, Textarea, Buttom } from './index.styled';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    API.post('', data)
  }
  if (errors && errors.length) {
    console.log(errors);
  }
  
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} >
      <Input type="text" placeholder="Title" {...register("title", {required: true, maxLength: 80})} />
      <Textarea type="text" placeholder="Content" {...register("content", {required: true})} />
      <Input type="datetime-local" placeholder="Due Date" {...register("due", {required: true})} />

      <Buttom type="submit" />
    </StyledForm>
  );
}

export default Form