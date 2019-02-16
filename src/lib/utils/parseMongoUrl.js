// eslint-disable-next-line max-len
const MONGO_URL_PLACEHOLDER = 'mongodb://[replSet]/[name]?replicaSet=[replicaSet]'

const parseMongoUrl = ({
  name,
  replicaSet,
  replSet: replSetList,
}: {
  name: string,
  replicaSet: string,
  replSet: object[],
}) => {
  const replSet = replSetList
    .map(({ ip, port }) => [ip, port].filter(Boolean).join(':'))
    .join(',')

  const dbUrl = MONGO_URL_PLACEHOLDER
    .replace('[replicaSet]', replicaSet)
    .replace('[name]', name)
    .replace('[replSet]', replSet)
  return dbUrl
}

export default parseMongoUrl
