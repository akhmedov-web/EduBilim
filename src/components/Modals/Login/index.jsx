import React, { useContext } from "react";
import { ModalContext } from "@/context";
import { hideModal, selectIsModalVisible } from "@/libs/slices/appSlice";
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button, Switch, Form, Input, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { Modal as AntModal } from "antd";
import { useSelector, useDispatch } from "react-redux";

export default function LoginModal() {

    const isVisible = useSelector(selectIsModalVisible);
    console.log(isVisible);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(hideModal())
    }

    return (
        <AntModal className="!w-[450px]" open={isVisible} onCancel={handleClose}>
            <Form layout="vertical">
                <Form.Item
                    label="Email"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password size="large" />
                </Form.Item>

                <Form.Item label="Remember me" valuePropName="checked">
                    <Switch className="bg-gray-300" />
                </Form.Item>

                <Form.Item>
                    <Button size="large" type="primary" block className="bg-green">
                        Sign in
                    </Button>
                </Form.Item>
                <Col className="flex flex-col items-center justify-center gap-y-4">
                    <label className="font-bold">Sign in with</label>
                    <Row className="justify-center gap-x-3">
                        <Button size="large" type="primary" shape="round" icon={<FacebookOutlined />} ghost className="flex justify-center items-center" />
                        <Button size="large" type="primary" shape="round" icon={<GoogleOutlined />} ghost className="flex justify-center items-center" />
                    </Row>
                </Col>
                <Col className="mt-6 text-center">
                    <Row className="justify-center gap-x-2">
                        <h3>Don’t have an account?</h3>
                        <Link to="/sign-up/student" className="text-green">Sign Up</Link>
                    </Row>
                    <Link to="/forgot" className="text-green">Forgot password?</Link>
                </Col>
            </Form>
        </AntModal>
    );
}
