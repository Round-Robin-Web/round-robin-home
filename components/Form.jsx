import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import { 
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const webhookURL = '';

/**
 * 非同期 Varidation
 */
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('氏名は必須です'),
  email: Yup.string()
    .email('メールアドレスの形式に誤りがあります')
    .required('メールアドレスは必須です'),
  tel: Yup.string()
    .matches(phoneRegExp, '電話番号の形式に誤りがあります'),
  content: Yup.string()
    .required('お問い合わせ内容は必須です'),
});

/**
 * フォーム送信後の処理
 */
const handleSubmit = (form, {restForm}) => {
  let text = `■ 名前: ${form.name}\n■ メールアドレス: ${form.email}\n■ 電話番号: ${form.tel}\n■ お問い合わせ内容: ${form.content}`;
  let data = {
    method: 'post',
    baseURL:webhookURL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    data: `payload={ "text": "${ text }"}`
  }
  try {
    axios.request(data)
    alert('送信しました')
    resetForm()
    Router.push('/') // リダイレクト
  } catch (error) {
    alert('送信に失敗しました');
  }
}

const defaultFormState = {
  email: '',
  password: '',
  confirmPassword: ''
}

const ContactForm = () => {
    return (
      <Formik
        onSubmit={handleSubmit}
        initialValues={defaultFormState}
        validationSchema={validationSchema}
      >
          <Form>
              <div className="form-field">
                  <Field
                      name="name"
                      type="text"
                      placeholder="氏名"
                  />
              </div>
              <div className="form-field">
                  <Field
                      name="email"
                      type="email"
                      placeholder="メールアドレス"
                  />
              </div>
              <div className="form-field">
                  <Field
                      name="tel"
                      type="tel"
                      placeholder="電話番号"
                  />
              </div>
              <div className="form-field">
                  <Field
                      name="content"
                      component="textarea"
                      placeholder="お問い合わせ内容"
                  />
              </div>
              <div className="form-field">
                  <button type="submit">
                      送信
                  </button>
              </div>
              <ErrorMessage
                  name="name"
                  component="div"
                  className="invalidForm"
              />
              <ErrorMessage
                  name="email"
                  component="div"
                  className="invalidForm"
              />
              <ErrorMessage
                  name="tel"
                  component="div"
                  className="invalidForm"
              />
              <ErrorMessage
                  name="content"
                  component="div"
                  className="invalidForm"
              />
          </Form>
      </Formik>
    )
}

export default ContactForm;