import React from 'react'
import Skills_details from "./Skills_details"

const Skills = () => {
    const skillsList = [
        {
            img : "/skills/azure.png",
            text : "Azure"
        },
        {
            img : "/skills/aws.jpeg",
            text : "AWS"
        },
        {
            img : "/skills/gcp.png",
            text : "GCP"
        },
        {
            img : "/skills/jenkins.png",
            text : "Jenkins"
        },
        {
            img : "/skills/html.png",
            text : "HTML"
        },
        {
            img : "/skills/css.png",
            text : "CSS"
        },
        {
            img : "/skills/javascript.png",
            text : "Javascript"
        },
        {
            img : "/skills/wordpress.png",
            text : "WordPress"
        },
        {
            img : "/skills/sap.jpeg",
            text : "SAP"
        },
        {
            img : "/skills/sql.png",
            text : "SQL"
        },
        {
            img : "/skills/java.png",
            text : "Java"
        },
        {
            img : "/skills/python.jpeg",
            text : "Python"
        },
        {
            img : "/skills/php.png",
            text : "PHP"
        },
        {
            img : "/skills/asp.jpeg",
            text : "ASP.NET"
        },
        {
            img : "/skills/powershell.jpeg",
            text : "Powershell"
        },
        {
            img : "/skills/ansible.png",
            text : "Ansible"
        },
        {
            img : "/skills/git.png",
            text : "GIT"
        },
        {
            img : "/skills/docker.png",
            text : "Docker"
        },
        {
            img : "/skills/k8s.jpeg",
            text : "K8s"
        },
        {
            img : "/skills/ci_cd.png",
            text : "CI/CD"
        },
        {
            img : "/skills/powerapps.png",
            text : "PowerApps"
        },
        {
            img : "/skills/power_bi.jpeg",
            text : "Power Bi"
        },
        {
            img : "/skills/linux.png",
            text : "Linux"
        },
        {
            img : "/skills/jira.jpeg",
            text : "Jira"
        },
        {
            img: "/skills/salesforce.png",
            text: 'Salesforce'
        },
        {
            img: "/skills/hubspot.png",
            text: 'Hubspot'
        },
        {
            img: "/skills/whmcs.png",
            text: 'Whmcs'
        },
        {
            img : "/skills/zendesk.png",
            text : "Zendesk Admin"
        },
        {
            img : "/skills/powerautomate.jpeg",
            text : "Power Automate"
        },
        {
            img : "/skills/cloud_networking.png",
            text : "Cloud Networking"
        },
        {
            img : "/skills/microsoft.jpeg",
            text : "Microsoft Endpoint Configuration"
        },
        {
            img : "/skills/cms.jpeg",
            text : "Content Management Systems"
        },
    ]
  return (
    <div id='skills'>

    <div className='w-full min-h-screen pt-10'>
        <div className='max-w-[1240px] py-16 px-16 mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {skillsList.map((x, index)=>(
                    <Skills_details img={x.img} text={x.text} key={index}/>
                ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills