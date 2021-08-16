import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  if (errors && errors.length) {
    console.log(errors);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title" {...register("Title", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Content" {...register("Content", {})} />
      <input type="datetime-local" placeholder="Due Date" {...register("Due Date", {})} />

      <input type="submit" />
    </form>
  );
}

export default Form