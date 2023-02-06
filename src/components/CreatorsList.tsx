import { FC } from 'react'
import useGlobalStore from '@/stores/globalStore'
import Post from './PostListing'
import { useAccount } from 'wagmi'
import Subscription from './Subscribe'
import CreateNewProfile from './CreateNewProfile'
import CreatorsSubscribedTo from './CreatorsSubscribedTo'

const CreatorsList: FC = () => {
	const { address } = useAccount()
	const creators = useGlobalStore(state => state.creators)
	//const listOfCreators = creators.filter(creator => creator.)
	const uniqueCreators = Array.from(new Set(creators))

	return (
		<>
			<h1 className="text-2xl font-mono font-light dark:text-white mt-10 mb-6">List of creators</h1>

			<div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 w-full transition-all">
				{uniqueCreators.map(creator => (
					//<CreatorsSubscribedTo key={creator.toString()} {...creator} />
					<li key={creator.creatorAddress}> {creator.creatorAddress}</li>
				))}
			</div>
		</>
	)
}

export default CreatorsList
