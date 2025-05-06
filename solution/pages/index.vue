<script setup>
// Script opcional
</script>

<template>
    <div class="min-h-screen bg-neutral-white flex">
        <!-- Gradiente diagonal customizado à esquerda -->
        <div class="w-[25vw] min-h-screen hidden md:block relative overflow-hidden" style="
                background: linear-gradient(120deg,
                    hsl(249,99%,64%) 0%,
                    hsl(252,100%,70%) 18%,
                    #a259c9 32%,
                    #6e3bc6 48%,
                    #3b2066 70%,
                    hsl(278,68%,11%) 100%
                );
                box-shadow: 0 0 180px 0 rgba(40,0,80,0.7) inset;
            ">
            <!-- Brilho azulado -->
            <div
                style="position:absolute;left:30%;top:20%;width:60%;height:40%;background:radial-gradient(circle,rgba(80,180,255,0.18) 0,rgba(80,180,255,0) 80%);filter:blur(2px);">
            </div>
            <!-- Brilho branco -->
            <div
                style="position:absolute;left:55%;top:10%;width:40%;height:30%;background:radial-gradient(circle,rgba(255,255,255,0.18) 0,rgba(255,255,255,0) 80%);filter:blur(2px);">
            </div>
            <!-- Escurecimento nas bordas -->
            <div
                style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 20% 80%,rgba(40,0,80,0.25) 0,rgba(40,0,80,0.5) 80%);mix-blend-mode:multiply;">
            </div>
        </div>
        <!-- Conteúdo centralizado à direita -->
        <div class="flex-1 flex items-center justify-center">
            <form class="w-full max-w-md space-y-6">
                <!-- CARDHOLDER NAME -->
                <div>
                    <label
                        class="block text-xs tracking-widest text-neutral-verydark font-sans font-medium mb-2 uppercase"
                        for="cardholder">Cardholder Name</label>
                    <input id="cardholder" type="text" placeholder="e.g. Jane Appleseed"
                        class="w-full rounded-lg border border-neutral-light bg-white px-4 py-3 text-neutral-verydark font-sans text-base font-medium placeholder-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary-gradientStart transition"
                        autocomplete="off" />
                </div>
                <!-- CARD NUMBER -->
                <div>
                    <label
                        class="block text-xs tracking-widest text-neutral-verydark font-sans font-medium mb-2 uppercase"
                        for="cardnumber">Card Number</label>
                    <input id="cardnumber" type="text" inputmode="numeric" placeholder="e.g. 1234 5678 9123 0000"
                        class="w-full rounded-lg border border-neutral-light bg-white px-4 py-3 text-neutral-verydark font-sans text-base font-medium placeholder-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary-gradientStart transition [letter-spacing:0.1em]"
                        maxlength="19" autocomplete="off" />
                </div>
                <!-- Linha de Exp Date e CVC -->
                <div class="flex gap-4">
                    <div class="flex-1">
                        <label
                            class="block text-xs tracking-widest text-neutral-verydark font-sans font-medium mb-2 uppercase"
                            for="exp-month">Exp. Date (MM/YY)</label>
                        <div class="flex gap-2">
                            <input id="exp-month" type="text" inputmode="numeric" placeholder="MM" maxlength="2"
                                class="w-1/2 rounded-lg border border-neutral-light bg-white px-4 py-3 text-neutral-verydark font-sans text-base font-medium placeholder-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary-gradientStart transition"
                                autocomplete="off" />
                            <input id="exp-year" type="text" inputmode="numeric" placeholder="YY" maxlength="2"
                                class="w-1/2 rounded-lg border border-neutral-light bg-white px-4 py-3 text-neutral-verydark font-sans text-base font-medium placeholder-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary-gradientStart transition"
                                autocomplete="off" />
                        </div>
                    </div>
                    <div class="flex-1">
                        <label
                            class="block text-xs tracking-widest text-neutral-verydark font-sans font-medium mb-2 uppercase"
                            for="cvc">CVC</label>
                        <input id="cvc" type="text" inputmode="numeric" placeholder="e.g. 123" maxlength="3"
                            class="w-full rounded-lg border border-neutral-light bg-white px-4 py-3 text-neutral-verydark font-sans text-base font-medium placeholder-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary-gradientStart transition"
                            autocomplete="off" />
                    </div>
                </div>
                <!-- Botão Confirm -->
                <button type="submit"
                    class="w-full bg-neutral-verydark text-white font-sans font-medium text-lg rounded-lg py-3 mt-2 shadow-sm transition hover:bg-primary-gradientEnd focus:outline-none focus:ring-2 focus:ring-primary-gradientStart">
                    Confirm
                </button>
            </form>
        </div>
    </div>
</template>
