import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Heading, Text, Center, Box } from '@chakra-ui/react';

interface Opportunity {
  CompanyName: string;
  Objective: string;
  CompanyLogo: string;
  ProblemStateMent: string;
  Solution: string;
}

interface TeamMember {
  _id: string;
  CompanyName: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function Opportunities() {
  const [data, setData] = useState<Opportunity | null>(null);
  const [teamdata, setTeamData] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/opp/ABC Corporation');
        const responseTeam = await axios.get('http://localhost:4000/api/v1/team/ABC Corporation');
        setData(response.data);
        setTeamData(responseTeam.data);
      } catch (error) {
        console.error('Error fetching data:', (error as AxiosError).message);
      }
    };

    fetchData();
  }, []);

  console.log(teamdata, "");

  return (
    <>
      <Box p={4}>
        {data && (
          <Box>
            <Center mb={4}>
              <Box>
                <Heading>{data.CompanyName}</Heading>
                <Text>{data.Objective}</Text>
              </Box>
            </Center>

            <Center mb={4}>
              <img
                height="200px"
                width="200px"
                src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company Logo"
              />
            </Center>

            <Box ml={4}>
              <Heading>Problem Statement</Heading>
              <Text>{data.ProblemStateMent}</Text>
              <Heading>Problem Solution</Heading>
              <Text>{data.Solution}</Text>
            </Box>
          </Box>
        )}

        <div>
          <Heading>Team Members</Heading>
          <ul>
            {teamdata.map((member) => (
              <li key={member._id}>
                <strong>Name:</strong> {`${member.firstName} ${member.lastName}`}<br />
                <strong>Company:</strong> {member.CompanyName}<br />
                <strong>Created At:</strong> {member.createdAt}<br />
                <strong>Updated At:</strong> {member.updatedAt}<br />
              </li>
            ))}
          </ul>
       </div>
      </Box>
    </>
  );
}
