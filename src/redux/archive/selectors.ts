import { RootState } from '../store';

export const selectJuryMemberData = (state: RootState) => state.juryMember;

export const selectJuryMemberStatus = (state: RootState) => state.juryMember.status;
