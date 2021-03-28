import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import { 
  withFormik,
  Form,
  Field,
} from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const InnerForm = ({values, handleChange, errors, touched, isSubmitting}) => {
    return (
      <Form>
        <div className="form-field">
          {touched.name && errors.name && <p>{errors.name}</p>}
          <Field
              value={values.name}
              name="name"
              type="text"
              placeholder="氏名"
              onChange={handleChange}
          />
        </div>
        <div className="form-field">
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field
              value={values.email}
              name="email"
              type="email"
              placeholder="メールアドレス"
              onChange={handleChange}
          />
        </div>
        <div className="form-field">
          {touched.tel && errors.tel && <p>{errors.tel}</p>}
          <Field
              value={values.tel}
              name="tel"
              type="tel"
              placeholder="電話番号"
              onChange={handleChange}
          />
        </div>
        <div className="form-field">
          {touched.content && errors.content && <p>{errors.content}</p>}
          <Field
              value={values.content}
              name="content"
              component="textarea"
              placeholder="お問い合わせ内容"
              onChange={handleChange}
          />
        </div>
        <div className="form-field">
            <button type="submit" disabled={isSubmitting}>
                送信
            </button>
        </div>
      </Form>
    )
}

const ContactForm = withFormik({
  mapPropsToValues({name, email, tel, content}) {
    return {
      name: name || '',
      email: email || '',
      tel: tel || '',
      content: content || '',
    }
  },
  /**
   * 非同期 Varidation
   */
  validationSchema: Yup.object().shape({
    name: Yup.string().required('氏名は必須です'),
    email: Yup.string().email('メールアドレスの形式に誤りがあります').required('メールアドレスは必須です'),
    tel: Yup.string().matches(phoneRegExp, '電話番号の形式に誤りがあります'),
    content: Yup.string().required('お問い合わせ内容は必須です'),
  }),
  /**
   * フォーム送信後の処理
   */
  handleSubmit(values, { resetForm, setSubmitting}) {
    setTimeout(() => {
      let text = `■ 名前: ${values.name}\n■ メールアドレス: ${values.email}\n■ 電話番号: ${values.tel}\n■ お問い合わせ内容: ${values.content}`;
      let data = `payload={ "text": "${ text }"}`
      try {
        (async() => {
          await axios.post('/api/formProxy', data);
          alert('送信しました')
          resetForm()
          Router.push('/') // リダイレクト
        })();
      } catch (error) {
        alert('送信に失敗しました');
      }
      setSubmitting(false);
    }, 1000)
  }
})(InnerForm)

export default ContactForm;