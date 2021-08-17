import React from 'react';
import { useForm } from 'react-hook-form';
import API from '../../api'

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title" {...register("title", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Content" {...register("content", {})} />
      <input type="datetime-local" placeholder="Due Date" {...register("due", {})} />

      <input type="submit" />
    </form>
  );
}

export default Form