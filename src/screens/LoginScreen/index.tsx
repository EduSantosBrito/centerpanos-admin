import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '~/src/components/Banner';
import Icon from '~/src/components/Icon';
import { signIn, toggleStayConnected } from '~/src/ducks/auth';
import { openBanner, setBannerMessage } from '~/src/ducks/banner';
import { DefaultError, LoginMutationVariables, LoginResponse, LoginSuccessfully, useLoginMutation } from '~/src/generated/graphql';
import { RootState } from '~/src/store';
import LoginLayout, { LoginInputType } from './layout';
import schema from './schema';

const Login: FC = (): JSX.Element => {
    const methods = useForm<LoginMutationVariables>({
        resolver: yupResolver(schema),
    });
    const [focusedInput, setFocusedInput] = useState<LoginInputType | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const bannerOpen = useSelector((state: RootState) => state.banner.open);
    const signInMutation = useLoginMutation();
    const dispatch = useDispatch();

    const isLoginSuccessfully = (response: LoginResponse): response is LoginSuccessfully => response.__typename === 'LoginSuccessfully';
    const isLoginFailed = (response: LoginResponse): response is DefaultError => response.__typename === 'DefaultError';

    const onSubmit: SubmitHandler<LoginMutationVariables> = async variables => {
        const response = await signInMutation.mutateAsync(variables);
        if (isLoginSuccessfully(response.login as LoginResponse)) {
            const loginSuccessfully = response.login as LoginSuccessfully;
            dispatch(signIn(loginSuccessfully.token as string));
        } else if (isLoginFailed(response.login as LoginResponse)) {
            const error = response.login as DefaultError;
            dispatch(setBannerMessage(error.message as string));
            dispatch(openBanner());
        }
    };

    const passwordIcon = useMemo(() => {
        if (showPassword) {
            return <Icon icon='hide-password' />;
        }
        return <Icon icon='show-password' />;
    }, [showPassword]);

    return (
        <FormProvider {...methods}>
            {bannerOpen && <Banner />}
            <LoginLayout
                errors={methods.formState.errors}
                control={methods.control}
                onSubmit={methods.handleSubmit(onSubmit)}
                toggleStayConnected={() => dispatch(toggleStayConnected())}
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                passwordIcon={passwordIcon}
            />
        </FormProvider>
    );
};

export default Login;
