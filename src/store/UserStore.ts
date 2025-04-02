import { defineStore } from "pinia";
import { useRouter } from "vue-router";
interface IUserDispatch {
  user: any;
}

export const useAuthStore = defineStore("auth", {
  state: (): IUserDispatch => ({
    user: JSON.stringify(localStorage.getItem('user')),
  }),
  
  actions: {
    logOut() {
      const router = useRouter();
      localStorage.removeItem('user');
      router.push('/login')
    }
  }
});
