export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
};
export type AuthStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
