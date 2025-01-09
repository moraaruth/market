const createShow = useCreateShow();
const updateShow = useUpdateShow();

const handleSubmit = e => {
e.preventDefault()
const payload = {
title,
storyline,
platforms: availablePlatforms?.map(x => ({ name: x })),
active: true
}

if (data?.id) {
updateShow.mutateAsync({ data: payload, id: data?.id}, {
onSuccess: () => {
closeModal(modalId);
}
})
} else {
createShow.mutateAsync(payload, {
onSuccess: () => {
closeModal(modalId);
setTitle('');
setStoryline('');
setAvailablePlatforms([])
}
});
}
}
