import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Chat() {
  const { id } = useParams();

  const [conversations, setConversations] = useState([]);
  const [myId, setMyId] = useState([]);

  //isCLicked
  const [convState, setConvState] =useState(null)
  //activeConversationId
  const [activeConversation, setActiveConversation] =useState(null)
  //OpenConversation
  const [openConversation, setOpenConversation] =useState(null)

  const [sender, setSender] = useState(null);
  const [receiver, setReceiver] = useState(null);
  //Messages
  const [messages, setMessages]= useState(null)
  //typedMessage
  const [typedMessage, setTypedMessage] = useState('')

  
  useEffect(() => {
    console.log("ActiveConv ", activeConversation)
    // Find the conversation matching the activeConversationId
    const conversation = conversations.find(conv => conv.conversationId === activeConversation);

    console.log(conversation)
    
    // If conversation is found, update the openConversation state
    if (conversation) {
      setOpenConversation(conversation);
      
      // Determine sender and receiver based on myId
      const sender = myId === conversation.participant1Id ? conversation.participant1Name : conversation.participant2Name;
      const receiver = myId === conversation.participant1Id ? conversation.participant2Name : conversation.participant1Name;

      // Update sender and receiver states
      setSender(sender);
      setReceiver(receiver);
    } else {
      setOpenConversation(null); // Reset openConversation if activeConversation is not found
    }
  }, [activeConversation]);



  useEffect(() => {
    // Extracting the id parameter from the window's path


    const fetchConversations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/item/get/all/conv/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch conversations');
        }
        const data = await response.json();
        setConversations(data);
        setActiveConversation(data[0].conversationId)
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount


  

  return (
    <div className='bg-gray-200 w-full h-screen p-10 flex flex-col '>
      <div className='flex flex-row w-full h-full gap-5'>
        <div className='bg-white rounded-2xl h-full w-[25%] px-[20px] py-[30px] flex flex-col gap-3'>
          <h1 className='font-bold text-pr1 text-[22px] '>Conversations</h1>
          <div className='flex flex-col gap-2'>
            {conversations.map(conversation => (
              <Conversation 
              key={conversation.conversationId} 
              conversation={conversation} 
              userId={id}
              convId = {conversation.conversationId}
              setActiveConv = {setActiveConversation} 
              activeConv= {activeConversation}/>

            ))}
          </div>           
        </div>
        <div className='bg-[#ffffff63] rounded-3xl h-full w-[80%] flex flex-col gap-2 border-[7px] border-white p-3'>
            <div className='h-[10%] w-full flex flex-row p-4 items-center bg-white rounded-2xl'>
                <div className='flex flex-row gap-4'>
                <div className='overflow-hidden w-[50px] h-[50px] rounded-2xl'>
                <img src="https://imgupscaler.com/images/samples/animal-before.webp" className='object-cover' alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-[18px] text-gray-900'>{receiver.name}</h1>
                    <div className='flex flex-row  items-center gap-2'>
                        <div className='bg-green-500 rounded-full w-[10px] h-[10px]'>
                        </div>
                        <p className='font-medium text-[16px] text-gray-500 leading-5'> online</p>    
                    </div>
                </div>
                </div>
            </div>


            <div className='h-[80%] w-full bg-white rounded-2xl'>

            </div>


            <div className='h-[10%] w-full items-center gap-4 flex flex-row bg-white rounded-2xl px-3'>
                <textarea className='w-full h-[60px] rounded-full ' id="" cols="30" rows="4"></textarea>
                <div className='bg-pr1 rounded-full w-[40px] h-[40px]'>

                </div>


            </div>





          
        </div>
        </div>
       
    </div>
  );
}

function Conversation(props) {
  const { participant1Id, participant1Name, participant1Email, participant2Name, participant2Email} = props.conversation;
  const displayParticipantName = participant1Id === props.userId ? participant2Name : participant1Name;
  const displayParticipantEmail = participant1Id === props.userId ? participant2Email : participant1Email;

  return (
    <>
      <div onClick={()=>{props.setActiveConv(props.convId)}} className={`${props.convId === props.activeConv  ? ('bg-[#ccd9ff3f]') : ('')}   hover:bg-[#ccd9ff3f] h-[80px] w-full rounded-3xl flex flex-row gap-5 items-center px-5 cursor-pointer`}>
        <div className='overflow-hidden w-[50px] h-[50px] rounded-2xl  bg-pr1 flex items-center justify-center'>
          <img src={participant1Id === props.userId ? props.conversation.participant2ProfilePic : props.conversation.participant1ProfilePic} className='object-cover' alt="" />
        </div>
        <div>
          <h1 className='font-bold text-[18px] text-gray-900'>{displayParticipantName}</h1>
          <p className='font-medium text-[13px] text-gray-500 leading-5'>{displayParticipantEmail}</p>      
        </div>
      </div>
      <div className='text-gray-500 bg-gray-200 h-[1px] w-full'></div>
    </>
  );
}

export default Chat;
