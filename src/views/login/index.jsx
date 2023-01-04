import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {Form, Icon, Input, Button, message, Spin, Layout} from "antd";
import {connect} from "react-redux";
import DocumentTitle from "react-document-title";
import "./index.less";
import {login, getUserInfo} from "@/store/actions";
import BackgroundCity from "@/assets/images/highscope/background-city.png"
import BackgroundSchool from "@/assets/images/highscope/background-school.png"
import LogoHighScope from "@/assets/images/highscope/logo-highscope.png"
import LogoShield from "@/assets/images/highscope/logo-shield.png"
import Title from "antd/es/typography/Title";

const {Header, Sider, Content} = Layout;


const Login = (props) => {
  const {form, token, login, getUserInfo} = props;
  const {getFieldDecorator} = form;
  const [forgot, setForgot] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleForgot = () => setForgot((show) => !show);
  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = (username, password) => {
    // 登录完成后 发送请求 调用接口获取用户信息
    setLoading(true);
    login(username, password)
      .then((data) => {
        message.success("Welcome");
        handleUserInfo(data.token);
      })
      .catch((error) => {
        setLoading(false);
        message.error(error);
      });
  };

  // 获取用户信息
  const handleUserInfo = (token) => {
    getUserInfo(token)
      .then((data) => {
      })
      .catch((error) => {
        message.error(error);
      });
  };

  const handleSubmit = (event) => {
    // 阻止事件的默认行为
    event.preventDefault();

    // 对所有表单字段进行检验
    form.validateFields((err, values) => {
      // 检验成功
      if (!err) {
        const {username, password} = values;
        handleLogin(username, password);
      } else {
        console.log("Error!");
      }
    });
  };

  if (token) {
    return <Redirect to="/dashboard"/>;
  }
  return (
    <Layout>
      <Header style={{background: '#fff', padding: 0}}>
        <img src={LogoHighScope} style={{
          position: 'absolute',
          top: 0,
          left: '5%',
          height: '100%',
        }}></img>

        <img src={LogoShield} style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          height: '55%',
        }}></img>

      </Header>

      <Content>
        <img src={BackgroundCity} style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1
        }}></img>

        <img src={BackgroundSchool} style={{
          position: 'absolute',
          top: '10%',
          right: 0,
          width: '30%',
          height: '90%',
        }}></img>

        <div style={{
          position: 'absolute',
          left: '5%',
          top: '28%',
          width: '60%',
        }}>
          <Title level={5} style={{
            color: '#222C64'
          }}>HighScope Indonesia</Title>
          <Title level={4} style={{
            color: "black",
            fontWeight: '300',
            marginTop: '-10px'
          }}>Sekolah HighScope Indonesia Electronic Database System (SHIELDS)</Title>

          {forgot ? (
            <Form onSubmit={handleSubmit} style={{
              width: '30%'
            }}>
              <Spin spinning={loading} tip="Loading...">
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      {
                        required: true,
                        whitespace: true,
                        message: "Email Wronged",
                      },
                    ],
                    initialValue: "", // admin
                  })(
                    <Input
                      style={{
                        borderRadius: 6,
                        border: '1px solid #A0A4A8',
                        color: '#A0A4A8',
                      }}
                      prefix={
                        <Icon type="idcard" style={{color: "rgba(0,0,0,.25)"}}/>
                      }
                      placeholder="Email"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    RESET PASSWORD
                  </Button>
                </Form.Item>
              </Spin>
            </Form>

          ) : (
            <Form onSubmit={handleSubmit} style={{
              width: '30%'
            }}>
              <Spin spinning={loading} tip="Loading...">
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      {
                        required: true,
                        whitespace: true,
                        message: "Email Wronged",
                      },
                    ],
                    initialValue: "", // admin
                  })(
                    <Input
                      style={{
                        borderRadius: 6,
                        border: '1px solid #A0A4A8',
                        color: '#A0A4A8',
                      }}
                      prefix={
                        <Icon type="idcard" style={{color: "rgba(0,0,0,.25)"}}/>
                      }
                      placeholder="Email"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        whitespace: true,
                        message: "Password Wronged",
                      },
                    ],
                    initialValue: "", // 初始值
                  })(
                    <Input
                      style={{
                        borderRadius: 6,
                        border: '1px solid #A0A4A8',
                        color: '#A0A4A8',
                      }}
                      prefix={
                        <Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>
                      }

                      suffix={
                        showPassword ? <Icon type="eye" style={{color: "rgba(0,0,0,.25)"}}/> :
                          <Icon type="eye-invisible" style={{color: "rgba(0,0,0,.25)"}}/>
                      }

                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"

                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    LOGIN
                  </Button>
                </Form.Item>
              </Spin>
            </Form>
          )}


          {forgot ? (
            <Button type={'link'} onClick={handleForgot} style={{
              color: '#222C64',
              padding: 0,
            }}>
              I remembered my password !
            </Button>
          ) : (
            <Button type={'link'} onClick={handleForgot} style={{
              color: '#222C64',
              padding: 0,
            }}>
              Forgot Password ?
            </Button>

          )

          }


        </div>


      </Content>
    </Layout>





    // <DocumentTitle title={"Login"}>
    //   <div className="login-container">

    //   </div>
    // </DocumentTitle>
  );
};

const WrapLogin = Form.create()(Login);

export default connect((state) => state.user, {login, getUserInfo})(
  WrapLogin
);
