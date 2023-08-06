import { useUser } from "@supabase/auth-helpers-react";
import { User } from "@supabase/supabase-js";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React, { createContext, useEffect, useReducer } from "react";

interface UserState {
  user: User | null;
}

type ActionType = { type: "SET"; payload: User } | { type: "CLEAR" };

const reducer = (state: UserState, action: ActionType): UserState => {
  switch (action.type) {
    case "SET":
      return { ...state, user: action.payload };
    case "CLEAR":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: { user: null },
  dispatch: () => {},
});

interface Props {
  children: React.ReactNode;
  user?: User | null;
}

export const UserProvider: React.FC<Props> = ({ children, user = null }) => {
  const clientUser = useUser();
  const [state, dispatch] = useReducer(reducer, { user });

  useEffect(() => {
    if (clientUser) {
      dispatch({ type: "SET", payload: clientUser });
    }
  }, [clientUser, dispatch]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

type AdditionalProps = Record<string, any>;

type SSProps = InferGetServerSidePropsType<
  GetServerSideProps<
    {
      user: User | null;
    } & AdditionalProps
  >
>;

export const withUserProviderPage = (
  Component: (_: any) => JSX.Element
): NextPage<SSProps> => {
  const WithUserProvider: NextPage<SSProps> = ({ user, ...props }) => {
    return (
      <UserProvider user={user}>
        <Component {...props} />
      </UserProvider>
    );
  };

  return WithUserProvider;
};
