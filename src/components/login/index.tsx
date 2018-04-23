import { Button, Form, Icon, Input } from "antd";
import "antd/lib/button/style/index.less";
import "antd/lib/input/style/index.less";
import "antd/lib/icon/style";
import "antd/lib/form/style/index.less";

import * as styles from "./style.less";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import {
  injectIntlDecorator,
  formDecorator,
  IntlComponentProps,
  AntdFormProps
} from "../base";

const FormItem = Form.Item;

interface ILoginProps extends IntlComponentProps, AntdFormProps {
  onLogin: (values: { [key: string]: any }) => void;
}

@injectIntlDecorator()
@formDecorator()
export class Login extends React.PureComponent<ILoginProps, {}> {
  public render() {
    const { intl, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className={styles.login}>
        <Form onSubmit={this.onSubmit} className={styles.loginForm}>
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [
                {
                  required: true,
                  message: intl.formatMessage({
                    id: "auth.username.placeholder"
                  })
                }
              ]
            })(
              <Input
                placeholder={intl.formatMessage({
                  id: "auth.username.placeholder"
                })}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("userPassword", {
              rules: [
                {
                  required: true,
                  message: intl.formatMessage({
                    id: "auth.username.placeholder"
                  })
                }
              ]
            })(
              <Input
                placeholder={intl.formatMessage({
                  id: "auth.password.placeholder"
                })}
                type="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginSubmit}
            >
              <FormattedMessage id="auth.login" defaultMessage="Login" />
            </Button>
          </FormItem>
          <FormItem>
            <a className={styles.logForgot} href="">
              <FormattedMessage
                id="auth.forgot.password"
                defaultMessage="Forget Password"
              />
            </a>

            <a href="" className={styles.loginReg}>
              <FormattedMessage id="auth.register" defaultMessage="Register" />
            </a>
          </FormItem>
        </Form>
      </div>
    );
  }

  private onSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();
    const { form, onLogin } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onLogin(values);
      }
    });
  };
}
