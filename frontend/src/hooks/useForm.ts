import { useEffect, useState } from 'react';
import axios from 'axios';

type UseStateVariables = 'name' | 'job' | 'phoneNumber' | 'userIP';

interface StateProps {
  name: string;
  job: string;
  phoneNumber: string;
  userIP: string;
}

interface FormProps extends StateProps {
  updateState(variable: UseStateVariables, value: string, pressedKey?: string): void;
  getUserIP(): void;
  saveUserData(): void;
  resetUserData(): void;
}

export function useForm(): FormProps {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userIP, setUserIP] = useState('');

  function updateState(variable: UseStateVariables, value: string): void {
    const state = {
      name: () => setName(value),
      job: () => setJob(value),
      phoneNumber: () => {
        if (Number(value) >= 0) {
          let phone = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

          setPhoneNumber(phone);
        }
      },
      userIP: () => setUserIP(value),
    };

    state[variable]();
  }

  function getUserIP(): void {
    axios.get('https://ip-fast.com/api/ip/').then(res => setUserIP(res.data));
  }

  function saveUserData(): void {
    const data = { name, job, phoneNumber, userIP };

    localStorage.setItem('userData', JSON.stringify(data));

    alert('Suas informações foram salvas!');
  }

  function resetUserData(): void {
    localStorage.removeItem('userData');

    setName('');
    setJob('');
    setPhoneNumber('');
    setUserIP('');

    alert('Dados de usuário limpos com sucesso!');
  }

  useEffect(() => {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const { name, job, phoneNumber, userIP }: StateProps = JSON.parse(userData);

      setName(name);
      setJob(job);
      setPhoneNumber(phoneNumber);
      setUserIP(userIP);
    }
  }, []);

  return { name, job, phoneNumber, userIP, updateState, getUserIP, saveUserData, resetUserData };
}
